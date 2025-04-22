
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";

const PriceComparisonSection = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % comparisonData.features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Make sure activeFeatureIndex is within the valid range
  const safeActiveIndex = activeFeatureIndex < comparisonData.platforms.length ? 
    activeFeatureIndex : 0;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We <span className="text-blue-600">Compare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get more value for your money with Xplainerr compared to other PM interview prep platforms
          </p>
        </div>

        {/* Mobile view - Improved table view for mobile */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-lg shadow-xl p-4 border border-blue-100 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead className="bg-blue-50 rounded-t-lg">
                  <tr>
                    <th className="p-3 text-left text-gray-800 font-medium">Features</th>
                    <th className="p-3 text-center bg-blue-100 text-blue-600 font-medium">
                      <div className="flex flex-col items-center">
                        <span className="text-blue-600 font-bold">Xplainerr</span>
                        <Badge className="mt-1 bg-blue-600 text-white">Best Value</Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.features.map((feature, featureIndex) => (
                    <tr 
                      key={feature} 
                      className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 border-t font-medium">{feature}</td>
                      <td className="p-3 border-t text-center bg-blue-50">
                        {typeof comparisonData.platforms[0].features[featureIndex] === "boolean" ? (
                          comparisonData.platforms[0].features[featureIndex] ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold">
                            {comparisonData.platforms[0].features[featureIndex]}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 font-bold">
                    <td className="p-3 border-t">Price</td>
                    <td className="p-3 border-t text-center text-blue-600 bg-blue-50">$49</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Toggle view for other platforms on mobile */}
            <div className="mt-6 border-t pt-4">
              <div className="text-center mb-3">
                <h4 className="text-base font-medium">Compare with competitors</h4>
              </div>
              <div className="flex overflow-x-auto pb-2 gap-2 justify-center">
                {comparisonData.platforms.slice(1).map((platform, index) => (
                  <Badge
                    key={platform.name}
                    className={`cursor-pointer px-3 py-1.5 text-sm whitespace-nowrap ${
                      safeActiveIndex === index + 1
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => setActiveFeatureIndex(index + 1)}
                  >
                    {platform.name}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-3 font-medium text-center">
                  {comparisonData.platforms[safeActiveIndex].name}
                </div>
                <div className="divide-y">
                  {comparisonData.features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3">
                      <span className="text-sm">{feature}</span>
                      <span className="font-medium">
                        {typeof comparisonData.platforms[safeActiveIndex].features[idx] === "boolean" ? (
                          comparisonData.platforms[safeActiveIndex].features[idx] ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          comparisonData.platforms[safeActiveIndex].features[idx]
                        )}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 bg-gray-100">
                    <span className="text-sm font-bold">Price</span>
                    <span className="font-bold">
                      ${comparisonData.platforms[safeActiveIndex].price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">* Based on annual subscription prices as of June 2024</p>
          </div>
        </div>

        {/* Desktop view - Full comparison table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="inline-block min-w-full py-2">
            <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200">
              <Table>
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="w-1/4 py-4">Features</TableHead>
                    <TableHead className="w-1/5 text-center bg-blue-100">
                      <div className="flex flex-col items-center">
                        <span className="text-blue-600 font-bold">Xplainerr</span>
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mt-1">Best Value</span>
                      </div>
                    </TableHead>
                    {comparisonData.platforms.slice(1).map((platform) => (
                      <TableHead key={platform.name} className="w-1/5 text-center">
                        {platform.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.features.map((feature, featureIndex) => (
                    <TableRow 
                      key={feature} 
                      className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <TableCell className="font-medium py-4">{feature}</TableCell>
                      {comparisonData.platforms.map((platform) => (
                        <TableCell 
                          key={`${platform.name}-${feature}`} 
                          className={cn(
                            "text-center",
                            platform.name === "Xplainerr" ? "bg-blue-50" : ""
                          )}
                        >
                          {typeof platform.features[featureIndex] === "boolean" ? (
                            platform.features[featureIndex] ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className={platform.name === "Xplainerr" ? "font-semibold" : ""}>
                              {platform.features[featureIndex]}
                            </span>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow className="bg-gray-100">
                    <TableCell className="font-bold py-4">Price</TableCell>
                    <TableCell className="text-center font-bold text-blue-600 bg-blue-50">${comparisonData.platforms[0].price}</TableCell>
                    {comparisonData.platforms.slice(1).map((platform) => (
                      <TableCell key={`${platform.name}-price`} className="text-center">
                        ${platform.price}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">* Based on annual subscription prices as of June 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Comparison data for the table
const comparisonData = {
  features: [
    "Real PM Interview Questions",
    "Top-tier Mentors",
    "1:1 Mock Interviews",
    "Practice Exercises",
    "Community Support",
    "Lifetime Access",
    "Success Rate",
  ],
  platforms: [
    {
      name: "Xplainerr",
      features: [
        true,
        true,
        true,
        "500+",
        true,
        true,
        "92%",
      ],
      price: 49
    },
    {
      name: "Exponent",
      features: [
        true,
        false,
        true,
        "300+",
        true,
        false,
        "85%",
      ],
      price: 199
    },
    {
      name: "Next Leap",
      features: [
        true,
        false,
        false,
        "200+",
        true,
        false,
        "80%",
      ],
      price: 249
    },
    {
      name: "Product Alliance",
      features: [
        true,
        false,
        false,
        "250+",
        false,
        false,
        "75%",
      ],
      price: 149
    },
    {
      name: "StellarPeers",
      features: [
        true,
        false,
        true,
        "100+",
        false,
        false,
        "70%",
      ],
      price: 199
    },
  ],
};

export default PriceComparisonSection;
