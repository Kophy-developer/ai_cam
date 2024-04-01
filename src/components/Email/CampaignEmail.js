import { IoSearchSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import AppHeader from "../Routes/AppHeader";
import IconInput from "../atoms/IconInput";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import { useEffect, useState } from "react";
import { sendRequest } from "../../utils/service";
import Loader from "../atoms/Loader";

const CampaignEmail = () => {
  const [campaign, setCampaign] = useState([]);
  const [campaignIsLoading, setCampaignIsLoading] = useState(false);
  const [campaignError, setCampaignError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCampaignIsLoading(true);
      setCampaignError(null);
      const response = await sendRequest("data", true, null, "GET");

      setCampaignIsLoading(false);
      if (response.error) {
        return setCampaignError(response);
      }

      setCampaign(response);
    };
    fetchData();
  });

  const addFiltersHandler = () => {
    console.log("some values");
  };

  const clearAllFilters = () => {};

  const removeLabelHandler = () => {};

  if (campaignError) {
    return <p>There was an error fetching data</p>;
  }
  return (
    <div className="h-full flex flex-col">
      <AppHeader page={"Email Campaign"} />

      {/* {campaignIsLoading && <Loader />} */}
      <div className="flex flex-col h-full p-6 gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <IconInput
              placeholder="Tourist ID or Name"
              icon={<IoSearchSharp />}
              type="text"
            />
            <IconInput
              placeholder="Nationality"
              icon={<IoSearchSharp />}
              type="text"
            />

            <IconInput options={["Gender", "Male", "Female"]} />
            <IconInput options={["Custer Type", "Uyo", "Abak", "Etim-Ekpo"]} />
            <IconInput
              placeholder="Tourist ID or Name"
              icon={<CiCalendarDate />}
              type="date"
            />
          </div>
          <Button
            text={"Apply"}
            type="button"
            look={2}
            onClick={addFiltersHandler}
          />
        </div>
        <div className="pb-2 flex items-center gap-2">
          <Label text={"Region: Asia"} onClick={removeLabelHandler} />
          <Label text={"Region: Asia"} />
          <Label text={"Region: Asia"} />
        </div>
        <div className="pb-2 flex items-center justify-between">
          <Button
            type={"button"}
            look={3}
            text={"Clear All Filters"}
            onClick={clearAllFilters}
          />
        </div>

        <div className="mt-2 flex flex-col justify-between flex-1 p-3">
          <div class="overflow-x-auto flex flex-col">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      class="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded"
                    />
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Tourist ID
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Arrival Date
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Review
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    RFM Category
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Attraction Visit
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Nationality
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {campaign &&
                  campaign.splice(0, 8).map((el) => (
                    <tr className="border-b">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          class="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded"
                        />
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">{el.id}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{el.name}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{el.date}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{el.review}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{el.category}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {el.attraction}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {el.nationality}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="w-full flex items-center justify-end px-4">
              <Button look={2} type={"button"} text={"Send Email"} />
            </div>
          </div>
          <footer className="flex items-center justify-center">
            <div class="flex items-center self-center">
              <button class="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none">
                Prev
              </button>
              <span class="px-3">1</span>
              <span class="px-3">2</span>
              <span class="px-3">3</span>
              <button class="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none">
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CampaignEmail;
