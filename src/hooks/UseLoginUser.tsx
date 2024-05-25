import { LoginUser } from "../srvices/fetch";
import { useMutation } from "@tanstack/react-query";

const UseLoginUser = () => {
    return useMutation({
       mutationFn: LoginUser,
        }
    );
 }
 
 export { UseLoginUser };