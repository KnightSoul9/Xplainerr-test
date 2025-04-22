// pages\events\index.js

import Image from "next/image";
import Link from "next/link";
import TimeTable from "./timeTable";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const UpcomingEvents = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full">
            <Image
              src={event?.image || "/placeholder-event.jpg"}
              alt={event?.title}
              width={500}
              height={500}
              className="w-full h-auto object-contain lg:min-h-[400px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Event Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-600 text-white">
              Upcoming Event
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
          <div className="flex-grow">
            {/* Title & Description */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {event?.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {event?.description}
            </p>

            {/* Event Details */}
            <div className="space-y-4 mb-8">
              <TimeTable event={event} />
            </div>

            {/* Price Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold text-gray-900">₹199</div>
              <div className="text-sm text-gray-500">($5)</div>
              <div className="text-sm text-green-600 bg-green-50 px-2 py-0.5 rounded-full ml-2">
                Early Bird Price
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                Live Interactive Session
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                Q&A with Industry Experts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                Downloadable Resources
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <Link 
            href={`/events/${event?.slug}`}
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
