import React from 'react';
import ResourceCard from './ResourceCard';

function PaymentProcessing() {
  const resources = [
    {
      title: 'Stripe',
      description: 'Online payment processing for internet businesses.',
      link: 'https://docs.stripe.com',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Payment Processing</h2>
      <div className="flex flex-wrap justify-center">
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index}
            logo={resource.logo}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentProcessing;
