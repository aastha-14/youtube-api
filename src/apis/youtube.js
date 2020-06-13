import axios from 'axios';
const KEY = 'AIzaSyBguJlFS8Zi6N2fRmyt2kVR_qjQrAlmIVE';


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3" ,
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
});
