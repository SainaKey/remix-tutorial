import type { ActionFunctionArgs } from "@remix-run/node";
import {  redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import {  updateContact } from "../../data";


export const editAction = async ({params,request,}:ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};

export type EditAction = typeof editAction;