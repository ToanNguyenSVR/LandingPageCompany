"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useApi from "@/hooks/useApi";
import { ENDPOINTS } from "@/config/URL";

// Interface for the Location type
interface Location {
  id: number;
  name: string;
  nameEn: string;
  nameKo: string;
  address: string;
  addressEn: string;
  addressKo: string;
  url: string;
  linkgoogleMap: string;
}

// Interface for the LocationContextProps
interface LocationContextProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  loading: boolean;
  error: string | null;
}

// Interface for the API response
interface ApiResponse {
  data: Location[];
}

// Create context with a default undefined value
const LocationContext = createContext<LocationContextProps | undefined>(
  undefined
);

// Interface for the LocationProvider props
interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const { callApi, loading, error } = useApi<ApiResponse>();

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await callApi(ENDPOINTS.GET_BRANCH);
      if (data) {
        const newLocations = data.data.map((item: Location) => ({
          id: item.id,
          name: item.name,
          nameEn: item.nameEn,
          nameKo: item.nameKo,
          address: item.address,
          addressEn: item.addressEn,
          addressKo: item.addressKo,
          url: item.url?.replace(
            "http://27.71.26.120",
            "https://phototimevn.com"
          ),
          linkgoogleMap: item.linkgoogleMap,
        }));
        setLocations(newLocations);
      }
    };

    fetchLocations();
  }, [callApi]);

  return (
    <LocationContext.Provider
      value={{ locations, setLocations, loading, error }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = (): LocationContextProps => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider"
    );
  }
  return context;
};
