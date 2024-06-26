import { ValidationErrors } from "@angular/forms";

export const getValidatorErrorMessage = (validatorName: string, validatorErrors?: ValidationErrors): string|undefined => {
    let args :any;
    if(messages.get(validatorName)?.validatorErrorsKey){
        args = messages.get(validatorName)?.validatorErrorsKey?.map(name => validatorErrors?.[name]);
    }else{
        args = messages.get(validatorName);
    }
    console.log(validatorName," && ",validatorErrors," && args ",args," && ",messages.get(validatorName));
    return (args) ? stringFormat(messages.get(validatorName)?.message,args) : messages.get(validatorName)?.message;
}

const  messages = new Map<string, {message : string,validatorErrorsKey? : string[]}>([
    ['required',  { message : 'This field is required'} ],
    ['minlength', { message : 'Password must be at least {0} characters long' ,   validatorErrorsKey :['requiredLength']}],
    ['maxlength', { message : 'Password cannot be more than {0} characters long', validatorErrorsKey :['requiredLength']}],
    ['email',     { message : 'Email must be a valid email address'}],
]);

function stringFormat(template: string|undefined, args: any[]) {
    if(template){
        return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match; 
        });
    }
    return undefined;
 }