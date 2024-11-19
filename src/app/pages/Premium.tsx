interface PremiumPlan {
    name: string;
    price: number;
    features: string[];
  }
  
  interface PremiumPageProps {
    plans: PremiumPlan[];
  }
  
  export default function PremiumPage({ plans = [] }: PremiumPageProps) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Premium Plans</h1>
        {plans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-2xl font-bold mb-4">${plan.price}/month</p>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No premium plans available at the moment.</p>
        )}
      </div>
    )
  }
  