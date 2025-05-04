import React from "react";

const FAQ = () => {
  return (
    <div className="my-10">
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How can I find events near my location?
        </div>
        <div className="collapse-content text-sm">
          You can use our location filter or enable location services on your
          device to see events happening near you.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Do I need to register to attend an event?
        </div>
        <div className="collapse-content text-sm">
          Some events require prior registration or ticket purchase. Check the
          event details for specific requirements.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Are the events listed free to attend?
        </div>
        <div className="collapse-content text-sm">
          Many events are free, but some may have entry fees. The entry fee is
          mentioned in each event’s details.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I submit my own event to be listed?
        </div>
        <div className="collapse-content text-sm">
          Yes! Click on the 'Submit Event' button and fill out the form to have
          your event reviewed and listed.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How often is the event list updated?
        </div>
        <div className="collapse-content text-sm">
          We update our listings daily to ensure you get the most recent and
          relevant event information.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
