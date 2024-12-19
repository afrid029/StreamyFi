export const Login = async (req, res) => {

    const {name} = req.body;
    console.log(req.body);
    res.json({msg: 'We are in Login'})
    
}