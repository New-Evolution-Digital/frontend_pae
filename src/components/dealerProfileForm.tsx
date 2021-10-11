import { useForm } from 'react-hook-form'

type DealerFormData = {
    dealerName: string
    dealerAddress: string
    dealerPhone: string
    dealerLicense: string
    dealerEmail: string
}

const DealerProfileForm = () => {
    const { register, handleSubmit } = useForm<DealerFormData>()
    const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)))
    return (
        <div className="flex justify-center flex-col m-1.5">
            <div className="bg-blue-100 place-self-center p-6 rounded-lg shadow-lg justify-center max-w-xl">
                <form onSubmit={onSubmit}>
                    <div className="mb-8 flex flex-col">
                        <label>Dealership Name</label>
                        <input
                            className="px-4 py-3 rounded"
                            placeholder="Dealership Name"
                            {...register('dealerName')}
                        />
                        <label>Dealership Address</label>
                        <input
                            className="px-4 py-3 rounded"
                            placeholder="Dealership Address"
                            {...register('dealerAddress')}
                        />
                        <label>Dealership Phone Number</label>
                        <input
                            className="px-4 py-3 rounded"
                            placeholder="555-555-5555"
                            {...register('dealerPhone')}
                        />
                        <label>
                            Dealer License Number(including type initials)
                        </label>
                        <input
                            className="px-4 py-3 rounded"
                            placeholder="DA0000"
                            {...register('dealerLicense')}
                        />
                        <label>Dealership Email</label>
                        <input
                            className="px-4 py-3 rounded"
                            placeholder="sales@randomdealership.com"
                            {...register('dealerEmail')}
                        />
                        <input
                            className="font-bold bg-blue-700 text-white mt-2 px-4 py-3 rounded hover:bg-white hover:text-blue-700"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DealerProfileForm
