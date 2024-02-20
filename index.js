let content = document.body.querySelector('.content__block_message');

const inputData = {
  idInstance: '',
  apiToken: '',
  phoneNumberMessage: '',
  message: '',
  phoneNumberFile: '',
  fileUrl: ''
};

const inputForm = {
  idInstance: document.getElementById('idInstance'),
  apiToken: document.getElementById('apiToken'),
  phoneNumberMessage: document.getElementById('phoneNumberMessage'),
  message: document.getElementById('message'),
  phoneNumberFile: document.getElementById('phoneNumberFile'),
  fileUrl: document.getElementById('fileUrl'),
};

Object.keys(inputForm).forEach(input => {
  inputForm[input].addEventListener('input', (event) => {
    inputData[input] = event.target.value;
  });
});

const formatTextFromJSON = (str) => {
  return JSON.stringify(str, null, 2);
};

const getSettings = async () => {
  const response = await axios.get(`https://api.green-api.com/waInstance${inputData.idInstance}/getSettings/${inputData.apiToken}`);
  content.innerHTML = JSON.stringify(response.data, null, 2);
};

const getStateInstance = async () => {
  const response = await axios.get(`https://api.green-api.com/waInstance${inputData.idInstance}/getStateInstance/${inputData.apiToken}`);
  content.innerHTML = JSON.stringify(response.data, null, 2);
};

const sendMessage = async () => {
  const response = await axios.post(`https://api.green-api.com/waInstance${inputData.idInstance}/sendMessage/${inputData.apiToken}`, {
    chatId: inputData.phoneNumberMessage + '@c.us',
    message: inputData.message,
  });
  content.innerHTML = JSON.stringify(response.data, null, 2);
};

const sendFileByUrl = async () => {
  const response = await axios.post(`https://api.green-api.com/waInstance${inputData.idInstance}/sendFileByUrl/${inputData.apiToken}`, {
    chatId: inputData.phoneNumberFile + '@c.us',
    urlFile: inputData.fileUrl,
    fileName: 'image.jpg'
  });
  content.innerHTML = JSON.stringify(response.data, null, 2);
};