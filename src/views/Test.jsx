import Admin from "../../../layout/AdminLayout.jsx";
import InputField from "./components/fields/InputField.jsx";
import {useState} from "react";
import axios from "axios";

export default function Test() {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [is_active, setIs_active] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('is_active', is_active);
        formData.append('description', description);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/add-book` ,formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('درخواست موفقیت‌آمیز بود: ', response.data);

            setName('');
            setPrice('')
            setIs_active('');
            setDescription('');
            window.location.href = "/";
        } catch (error) {
            console.error('خطا در ارسال درخواست: ', error);
        }
    };


    return (
        <>
            <Admin currentRoute="ایجاد">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            variant="category"
                            label="نام*"
                            placeholder="اسم کتاب"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <InputField
                            variant="category"
                            label="قیمت*"
                            placeholder="price"
                            id="price"
                            type="text"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />


                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="توضیحات*"
                            id="description"
                            name="description"
                            placeholder="توضیحات"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                        />
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="فعال*"
                            id="is_active"
                            name="is_active"
                            placeholder="is_active True or False"
                            value={is_active}
                            onChange={(e) => setIs_active(e.target.value)}
                            type="text"
                        />

                        <button  type='submit' className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        </>)
}