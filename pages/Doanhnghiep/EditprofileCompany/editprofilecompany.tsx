import React, { useRef, useState } from 'react'
import { NextPage } from 'next'

type FormState = {
    companyName: string
    employeeSize: string
    companyType: string
    website: string
    address: string
    description: string
    logoFile?: File | null
}

const employeeOptions = [
    '1-10 nhân viên',
    '11-50 nhân viên',
    '51-100 nhân viên',
    '100-150 nhân viên',
    '150-500 nhân viên',
    '500+ nhân viên',
]

const companyTypes = ['Tư nhân', 'Cổ phần', 'Nhà nước', 'FPT', 'Công ty nước ngoài']

const EditProfileCompany: NextPage = () => {
    const [form, setForm] = useState<FormState>({
        companyName: 'Công ty Cổ phần Công nghệ HNS',
        employeeSize: '100-150 nhân viên',
        companyType: 'Tư nhân',
        website: 'https://www.hns.com/',
        address: '14/4B Quang Trung, Hoàn Kiếm, Hà Nội',
        description:
            "Được thành lập năm 1993 với hội sở chính đặt tại Hà Nội, Techcombank là một trong những ngân hàng TMCP lớn nhất Việt Nam...",
        logoFile: null,
    })

    const [logoPreview, setLogoPreview] = useState<string | null>(null)
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files && e.target.files[0]
        if (!file) return
        setForm((s) => ({ ...s, logoFile: file }))
        const reader = new FileReader()
        reader.onload = () => setLogoPreview(String(reader.result))
        reader.readAsDataURL(file)
    }

    function triggerFileSelect() {
        fileInputRef.current?.click()
    }

    function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((s) => ({ ...s, [key]: value }))
        setErrors((e) => ({ ...e, [key]: undefined }))
    }

    function validate(): boolean {
        const newErrors: Partial<Record<keyof FormState, string>> = {}
        if (!form.companyName || form.companyName.trim().length < 2) newErrors.companyName = 'Tên doanh nghiệp là bắt buộc'
        if (!form.employeeSize) newErrors.employeeSize = 'Vui lòng chọn số lượng nhân viên'
        if (!form.companyType) newErrors.companyType = 'Vui lòng chọn loại hình doanh nghiệp'
        if (!form.website || !/^https?:\/\//.test(form.website)) newErrors.website = 'Website hợp lệ bắt buộc (bắt đầu với http/https)'
        if (!form.address || form.address.trim().length < 3) newErrors.address = 'Địa chỉ là bắt buộc'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault()
        if (!validate()) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        // For now we'll just log the data and show a success alert.
        const payload = {
            ...form,
            logoFileName: form.logoFile?.name || null,
        }
        // Replace with real API call when available
        // console.log('Submitting company profile', payload)
        alert('Cập nhật thông tin thành công')
        console.log('Company profile payload:', payload)
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-[#051A53] mb-4">Chỉnh Sửa Thông Tin Công Ty</h1>

            <form className="bg-white rounded-lg shadow-sm border p-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3">

                        <div className="flex flex-col items-center">
                            <div className='font-bold mb-4 text-[#051A53]'>Thông tin chung</div>
                            <div className="w-40 h-40 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                                {logoPreview ? (
                                    <img src={logoPreview} alt="logo preview" className="object-contain w-full h-full" />
                                ) : (
                                    <div className="text-center text-sm text-gray-500">Logo công ty</div>
                                )}
                            </div>

                            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                            <button type="button" onClick={triggerFileSelect} className="mt-3 px-3 py-2 border rounded text-sm text-red-600 border-red-200 hover:bg-red-50">
                                Upload logo
                            </button>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-9">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <label className="block text-sm font-medium text-slate-700">Tên doanh nghiệp <span className="text-red-500">*</span></label>
                                <input value={form.companyName} onChange={(e) => handleChange('companyName', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
                                {errors.companyName && <div className="text-sm text-red-600 mt-1">{errors.companyName}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-700">Số lượng nhân viên <span className="text-red-500">*</span></label>
                                <select value={form.employeeSize} onChange={(e) => handleChange('employeeSize', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2">
                                    <option value="">Chọn số lượng</option>
                                    {employeeOptions.map((o) => (
                                        <option key={o} value={o}>
                                            {o}
                                        </option>
                                    ))}
                                </select>
                                {errors.employeeSize && <div className="text-sm text-red-600 mt-1">{errors.employeeSize}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-700">Loại hình doanh nghiệp <span className="text-red-500">*</span></label>
                                <select value={form.companyType} onChange={(e) => handleChange('companyType', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2">
                                    <option value="">Chọn loại hình</option>
                                    {companyTypes.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                                {errors.companyType && <div className="text-sm text-red-600 mt-1">{errors.companyType}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-700">Website doanh nghiệp <span className="text-red-500">*</span></label>
                                <input value={form.website} onChange={(e) => handleChange('website', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
                                {errors.website && <div className="text-sm text-red-600 mt-1">{errors.website}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-700">Địa chỉ <span className="text-red-500">*</span></label>
                                <input value={form.address} onChange={(e) => handleChange('address', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
                                {errors.address && <div className="text-sm text-red-600 mt-1">{errors.address}</div>}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-12 mt-5">
                    <label className="block text-sm font-medium text-slate-700">Giới thiệu công ty <span className="text-red-500">*</span></label>
                    <textarea value={form.description} onChange={(e) => handleChange('description', e.target.value)} rows={6} className="mt-1 block w-full border rounded px-3 py-2" />
                </div>

                <div className="col-span-12 mt-10">
                    <button type="submit" onClick={handleSubmit} className="w-full bg-red-700 hover:bg-red-600 text-white px-4 py-3 rounded-[10px]">
                        Cập nhật thông tin
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProfileCompany
