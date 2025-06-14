import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI-Powered Precision",
    description:
      "Dermatologist-grade analysis using advanced machine learning algorithms.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Touchless Experience",
    description:
      "Seamless hands-free interaction powered by advanced gesture recognition technology.",
    icon: LockClosedIcon,
  },
  {
    name: "Real-Time Reports",
    description:
      "Instant analysis and insights delivered the moment your assessment is complete.",
    icon: ArrowPathIcon,
  },
  {
    name: "Smart Inventory Management",
    description:
      "Automated tracking and optimization that keeps your stock levels perfectly balanced.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Trusted Products",
    description:
      "Curated list of safe and effective skincare products",
    icon: CogIcon,
  },
  {
    name: "Scalable Model",
    description:
      "Designed for malls, salons, gyms,commercial spaces and more.",
    icon: ServerIcon,
  },
];

export default function KeyFeatures() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-green-700">
          Vending Machine
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Key Features
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-3 shadow-lg">
                        <feature.icon
                          aria-hidden="true"
                          className="size-8 text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base/7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
