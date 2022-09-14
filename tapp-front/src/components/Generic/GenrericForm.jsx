import React from "react";
import '../Generic/GenericForm.scss'
function GenericForm ({action, submitFunction, className, children}) {
    return (
        <form action={action} className={className} onSubmit={e => submitFunction(e)}>
            {children}
        </form>
    )
}
export default GenericForm