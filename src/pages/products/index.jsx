import { useState, useEffect } from 'react';
import axios from 'axios';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { deleteProduct } from '@/services/api/products';
import endPoints from '@/services/api';
import useAlert from '@/hooks/useAlert';
import Alert from '@/common/Alert';
import Link from 'next/link';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [priceSortAsc, setPriceSortAsc] = useState(false);
  const [idSortAsc, setIdSortAsc] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(endPoints.products.allProducts);
      setProducts(response.data);
    }
    try {
        getProducts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDelete = (id) => {
    try {
      deleteProduct(id).then(() => {
        setAlert({
          active: true,
          message: 'Delete product successfully',
          type: 'delete',
          autoClose: true,
        });
      });
      setProducts(products.filter((product) => {
        return product.id !== id;
      }));
    } catch (error) {
      setAlert({
        active: true,
        message: 'A problem has occured',
        type: 'error',
        autoClose: true,
      });
    }
  };

  useEffect(() => {
  }, [idSortAsc, priceSortAsc]);

  function sortProductId() {
    if (idSortAsc) {
        setProducts(products.sort((a, b) => a.id - b.id));
    }
    else {
        setProducts(products.sort((a, b) =>b.id - a.id));
    }
    setIdSortAsc(!idSortAsc);
  }

  function sortProductPrice() {
    if (priceSortAsc) {
        setProducts(products.sort((a, b) => a.price - b.price));
    }
    else {
        setProducts(products.sort((a, b) =>b.price - a.price));
    }
    
    setPriceSortAsc(!priceSortAsc);
  }
  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">List of products </h2>
        </div>
        
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th onClick={() => sortProductId()} scope="col" className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th onClick={() => sortProductPrice()} scope="col" className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/products/details/${product.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Details
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(product.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
