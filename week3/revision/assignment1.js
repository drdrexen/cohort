const jwt = require('jsonwebtoken');
const jwtPassword = "secret"
const zod = require("zod")
const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

function signJwt(email, password) {
    const emailResponse = emailSchema.safeParse(email);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!emailResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({ email }, jwtPassword);
    return signature;

}

const ans = signJwt("nischal@gmail.com", "nafasdfass");
console.log(ans);

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    }
    else {
        return false;
    }

}

function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    }
    catch (error) {
        ans = false;
    }
    console.log(ans);
}
verifyJwt("jkalsdfjkaslfjksladfjakslf")