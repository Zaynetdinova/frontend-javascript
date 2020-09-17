import React from 'react'
import Fetcher from "./fetch";
import {globalVar} from "./globalVar";

export async function getUsers() {
  try {
    const data = await Fetcher(`${globalVar.URL}`, 'GET')
    return  ({data: data, status: true})
  } catch (e) {
    return ({message: String(e), status: false })
  }
}
