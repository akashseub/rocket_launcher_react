

const Card = ({ card }) => {


    const flightStatus = () => {
        if (card.launch_success === true) {
            return 'Success'
        } else {
            return 'Failed'
        }
    }

    const flightStatusColor = () => {
        return card.launch_success === true ? 'bg-green-600' : 'bg-red-600';
    }


    return (
        <div className="border rounded-lg text-center p-4 space-y-8 flex flex-col">
            <div className="flex flex-col flex-grow">
                <img className="mx-auto" src={card.links.mission_patch_small} alt="" />
                <div className="space-y-2 pt-8">
                    <p><span className="text-gray-400">Launch Date:</span> {card.launch_date_local}</p>
                    <h2 className="text-3xl">{card.mission_name}</h2>
                    <p className="text-gray-400 ">{card.rocket.rocket_id}</p>
                </div>
            </div>
            <div>
                <p className="text-xl text-gray-400">Launch Status: </p>
                <h2 className={`${flightStatusColor()} text-white rounded-lg inline px-4 py-1`}>{flightStatus()}</h2>
            </div>
        </div>
    );
};

export default Card;