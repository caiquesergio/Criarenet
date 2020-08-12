import React, { useEffect, useState } from 'react';
import Client from '../../../core/services/remote/http-client';
import StorageClient from '../../../core/services/local/storage-client';
import HomeUi from '../page/home-ui';

function Home() {
    const [data, setData] = useState([]);

    const local = new StorageClient();

    async function fetchData() {
        const client = new Client();

        const response = local.isExists("userData") ? local.get("userData") :
            (await client.get("a2790e8c")).data;

        //gera uma lista com id baseado no indice dos elementos na lista
        const dataWithId = response.map((element, index) => {
            element.id = ++index;
            return element;
        });

        local.save("userData", dataWithId);
        //gera um novo id apartir do ultimo item

        setData(local.get("userData"));
    }

    useEffect(() => {
        fetchData();
    }, []);

    function removeItem(id) {
        const newData = local.removeItemById("userData", id)
        setData(newData);
    }

    return <HomeUi data={data} removeItemCallBack={removeItem} />
}



export default Home;
