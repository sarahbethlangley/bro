export const VehicleSearch = ({ setterFunction }) => {
    return (

        <div> 

            <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="Search Vehicles" />

        </div>
    )
}
