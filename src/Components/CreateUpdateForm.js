import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {CreateRequest, DetailsRequest} from "../Api/APIRequest";
import {OnChangeProductInput} from "../Redux/state/product-state-slice";
import store from "../Redux/store/store";

const CreateUpdateForm = () => {

    let [ObjectID, SetObjectID]= useState(0);
    let navigate = useNavigate();
    let FormValue = useSelector((state)=>(state.product.FromValue))

    useEffect(()=>{
        let QueryString = new URLSearchParams(window.location.search);
        let id = QueryString.get('id');
        if(id!==null){
            SetObjectID(id);
            (async ()=>{
                await DetailsRequest(id);
            })()
        }
    },[])

    const SaveData = async ()=>{
        if( FormValue['Img'].length === 0 ){
            toast.error("Image Required!")
        }else if(FormValue['ProductCode'].length === 0){
            toast.error("Product Code Required!")
        }else if(FormValue['ProductName'].length === 0){
            toast.error("Product Name Required!")
        }else if(FormValue['Qty'].length === 0){
            toast.error("Qty Required!")
        }else if(FormValue['TotalPrice'].length === 0){
            toast.error("Total Price Required!")
        }else if(FormValue['UnitPrice'].length === 0){
            toast.error("Unit Price Required!")
        }else {
            await CreateRequest(FormValue);
            navigate("/")
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 p-2">
                    <label>Image</label>
                    <input value={FormValue['Img']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Product Code</label>
                    <input value={FormValue['ProductCode']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Product Name</label>
                    <input value={FormValue['ProductName']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Qty</label>
                    <input value={FormValue['Qty']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Unit Price</label>
                    <input value={FormValue['UnitPrice']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Total Price</label>
                    <input value={FormValue['TotalPrice']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img", Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <button onClick={SaveData} className="mt-3 btn btn-primary">Save Change</button>
                </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;