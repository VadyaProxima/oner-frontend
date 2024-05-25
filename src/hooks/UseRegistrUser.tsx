import {useMutation} from "@tanstack/react-query";
import { User } from "@/types/user"
import {RegisterUser} from "@/srvices/fetch";

const UseRegisterUser = () => {
   return useMutation({
      mutationFn: RegisterUser,
       }
   );
}

export { UseRegisterUser };