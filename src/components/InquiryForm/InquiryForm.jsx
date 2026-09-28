import { useState } from "react";
function InquiryFrom(){
    const[form,setForm] = useState({
        fullName:"",
        phone:"",
        propertyType:"",
    });
    function handleChange(e){
        const {name,value}=e.target;
     setForm({...form,[name]:value});

    }
    const isPhoneValid = /^(?:\+251|0)9\d{8}$/.test(form.phone);
    function handleSubmit(e){
        e.preventDefault();
        alert(`Inquiry sent for ${form.fullName}! We will reach out via ${form.phone}.`);
        setForm({fullName:"",phone:"", propertyType:"House"});
    }
    return(
        <form className="inquiry-form" onSubmit={handleSubmit}>
            <h3></h3>
            <div>
                <label>Full Name:</label>
                <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="09...."
                />
                {form.phone && !isPhoneValid &&(<p className="error-text">Please enter a valid phone number</p>)}
            </div>
            <div>
                <label>Interested in:</label>
                <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Villa">Villa</option>
                </select>
                </div>
                <button type="submiit" disabled={!isPhoneValid || !form.fullName}>submit
                </button>
        </form>
    );
}
export default InquiryFrom;