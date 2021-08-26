import Clarifai from 'clarifai';


const app = new Clarifai.App({
    apiKey: 'dc9daeb2ae7142858bdcc38d51c8c08a'
   });

 const handleApiCall = (req,res) =>{
   app.models
       .predict( Clarifai.FACE_DETECT_MODEL, req.body.input)
       .then(data =>{
         res.json(data);
       })
       .catch(err => res.status(400).json('unable to work with API'))
}   

export default handleApiCall;