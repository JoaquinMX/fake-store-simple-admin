import FormUser from "@/components/FormUser";
import React, {useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import endPoints from "@/services/api";
export default function Edit() {
    const [user, setUser] = useState({});
    const [notFound, setNotFound] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const { id } = router.query;
        if(!router.isReady) return;
        async function getProduct() {
            try {
                const response = await axios.get(endPoints.users.getUser(id));
                console.log(response.data);
                response && setUser(response.data);
            }
            catch (error) {
                setNotFound(true);
            }
            
        }
        getProduct();
    }, [router?.isReady]);

    return notFound ? <div className="bg-red-100"> Product Not Found </div> : <FormUser user={user} />;
}