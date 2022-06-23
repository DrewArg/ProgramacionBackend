
export default {
  fyleSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "srv+mongodb://xxxxxxxxxxxxxxxxxxx",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    "type": "service_account",
    "project_id": "coderhouse-backend-62847",
    "private_key_id": "a627ff3b1bd8573c893a83620a0de33d9f5977e4",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgRD+O4iXeFlUl\nfmG+/ZMn6CCkGvtrTpBaqSk0EC2ExNKc5Id83Zob5hpe/Ua+HssyDa+Q/NzrxJTx\nwwz51l2JUzzmRT44p33eWZCgE47XkAPS7fLiaYbbFPVopdN37Qx+RFCF0bjvkFqO\n7+PgZMO366vQIUHcKRUW4ZsYopBsUEIvfRyEBwbHPzjlQV0mZqQeajE9c0tPHJn5\nxAA/Z4v19HSHoEXy97N8LHMyN/m9RkfvlpL0wSXMCCQBJcUkQqrGBPFvlgWpgiMe\nYHSncqTni/5V3V26sELYlMWWYJl8FyO/D5jF5f0EgexeNnBKF0XMMGWx3LPorAwR\nMSaAdYjvAgMBAAECggEAFKCyZ+YNLZxIQKabPwH74xPKzM1eisQzKuOcUpmaVjf0\nV1H91FJdtms3ybzqINqcPgJcP63CdD0kpggWzXQWLmdllpiP3I4rWaRLVS33WYR5\nlZElYgXqzYPj/rgh90nqeEK4VVaw9/gDHFqcTyt1hRk8OGyWrjVpJy2hImbxecTL\n/Y4Ur3YWwik9IqtoPMRMrvLKvugfV7fkrAgogNY7Rzb9t1AzCtFbQwBmLeNAR97y\nqj4Qjk23sPizFQOhNEM5A0C8qXR75t0Yr5imd56bpUNwjQrOODpCw/xwXkyTVWWQ\nkqCA2hEWMccGISEDpOyievobCunjMeDyRlh7NZhpoQKBgQDwSoK1e/3Y8UOvFk7O\n6iIYmfjrbMpdg7pBj3i+AIE1Kjl4c3NvLmxKh3A5XaDCHIiNnJL8JfQl3M6NJN4m\n6gv+tlXjZ116DRMchxBxShtBfmyu5Vuhnipgo/wOcHg6tIc+JrDlZuCC/6fgcnHv\nuwqaVv/+rOc/RccsnFSlhDTeKwKBgQDu7Y3CBLDAFjHthzzWQSvaB/J5jfKPAvcj\navAvAfgARMEPhDXpfuEbpe2b66H/RFzKwGHAElBlvp/Z40yevdkEdd+kcoNm8i15\nOf65zDkuldaG98D1keKtcvlbzztehqHR4bWywJ3Xqu/LXMUmGoEPBTefCNOPp/v4\nHkdJ26ciTQKBgQDrm+O2F7G7+jUnhHQZprFv9emAzddPAk6q4ga+JriKbLCVTn6t\nUZOVMF/1n7x1GI08bX4iBwTx6yQMeU3qUisYwahNpZieiBtpKXYR31wCR/hBNVs3\niWJ8B86qSdVZmpHRexaQmOMjD5KIHS9ipL+svgmcqeTEwaKeN1s4P/2mqQKBgQCo\nmF4wayjh0oeWqZhHQ6OS7YqvNXfUbG5BwsMLGKOMZPeqYEu+oPZtkQ9yt7oPK4ki\n1M/lPccXlISttpOpbCOH3zlZjCim6vslkMPrDW3ILpk7kfXKExBV/kxw+XFWSUBE\nnrWdFggLWCZvZN4E/izVkYPnJ85Jj2rgcVUyi9mK/QKBgF3Cp/omy+uBzC8H/5vp\nXqkDQc/qMIeXZEPn+T/3WblHR6Tp3cOyPW/ePFSaxuOBsnfQteaSvFmSn48znxPP\navcXTj9vxSREqAjrwjPRb2PxB+D3vd6816mVCm9U2mCH8SC7G41uOKRJHDKoysG1\nshAwG66Yh9OUI0FQxTS21ocz\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-waoh6@coderhouse-backend-62847.iam.gserviceaccount.com",
    "client_id": "110785260221979879370",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-waoh6%40coderhouse-backend-62847.iam.gserviceaccount.com"
  
  },
  PERSISTANCE_MODE: "mongodb"
};
