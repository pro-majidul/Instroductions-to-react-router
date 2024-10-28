import Price from "./Price";

const PriceOptions = () => {

   
    const membershipOptions = [
            {
                "id": "1",
                "name": "Basic Membership",
                "price": 29.99,
                "features": [
                    "Access to gym facilities",
                    "Unlimited gym hours",
                    "Group fitness classes",
                    "Free locker use",
                    "Complimentary fitness assessment",
                    "Monthly health tips newsletter"
                ]
            },
            {
                "id": "2",
                "name": "Standard Membership",
                "price": 49.99,
                "features": [
                    "All Basic Membership features",
                    "Access to swimming pool",
                    "Personal training session (1 per month)",
                    "Discount on merchandise",
                    "Nutrition consultation (1 per month)",
                    "Access to member-only events"
                ]
            },
            {
                "id": "3",
                "name": "Premium Membership",
                "price": 69.99,
                "features": [
                    "All Standard Membership features",
                    "Unlimited personal training sessions",
                    "Access to specialty classes (yoga, pilates)",
                    "Guest passes for friends",
                    "Priority booking for classes",
                    "Free fitness workshops"
                ]
            },
            {
                "id": "4",
                "name": "Family Membership",
                "price": 99.99,
                "features": [
                    "All Premium Membership features",
                    "Access for 2 adults and 2 children",
                    "Family fitness events",
                    "Reduced rates for additional family members",
                    "Family health and fitness assessments",
                    "Kids' activity programs"
                ]
            }
        ]
    


    return (
        <div className="py-5">
            <h2 className="font-bold text-4xl my-5 py-5 text-center">Best Price of the Town</h2>
            <div className="grid md:grid-cols-3 gap-5">

            {
                membershipOptions.map(option => <Price option={option} key={option.id}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;