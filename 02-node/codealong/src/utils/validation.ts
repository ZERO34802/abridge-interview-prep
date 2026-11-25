import validator from "validator";

interface UserSignUpData {
    firstName : string;
    lastName : string;
    userId : string;
    password : string;
    email : string;
    age: number;
}

const ALLOWED_USER_SIGN_UP_INFO = ["firstName","lastName","email","age","userId","password"];

export function UserSignUpDataValid(userData:unknown): userData is UserSignUpData {
    if(typeof userData === "object" && userData !== undefined && userData !== null) {
        if("firstName" in userData && typeof userData.firstName === "string" && userData.firstName.trim() !== ""
            && "lastName" in userData && typeof userData.lastName === "string" && userData.lastName.trim() !== ""
            && "email" in userData && typeof userData.email === "string" && validator.isEmail(userData.email)
            && "age" in userData && typeof userData.age === "number" && userData.age >= 18 && Number.isInteger(userData.age)
            && "userId" in userData && typeof userData.userId === "string" && userData.userId.trim() !== ""
            && "password" in userData && typeof userData.password === "string" && validator.isStrongPassword(userData.password)
        ) {
            let isEligible = Object.keys(userData).every((key) => {
                return ALLOWED_USER_SIGN_UP_INFO.includes(key);
            });
            if(isEligible) {
                return true;
            }else return false;
        }
    }
    return false;
}

export const validateUserLoginData = (requestBody : unknown) : requestBody is {email : string, password: string}=> {
    if(requestBody != null && typeof requestBody === "object") {
        if("email" in requestBody && requestBody.email !== null && typeof requestBody.email === "string"
            && "password" in requestBody && requestBody.password !== null && typeof requestBody.password === "string"
        ) {
            let { email, password} = requestBody;
            email = email;
            password = password;
            if(email !== "" && validator.isEmail(email) && password !== "")return true;
        }
    }
    return false;
}