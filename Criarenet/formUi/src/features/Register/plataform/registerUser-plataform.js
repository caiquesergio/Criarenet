import React, { useEffect, useState } from 'react';
import StorageClient from '../../../core/services/local/storage-client';
import RegisterUserUi from '../page/registerUser-ui';

function RegisterUser() {
    const [data, setData] = useState([]);

    const local = new StorageClient();

    function addItem(item) {
        local.addItemToKey('userData',item);
    }

    return <RegisterUserUi data={data} addItemCallBack={addItem} />
}
export default RegisterUser;