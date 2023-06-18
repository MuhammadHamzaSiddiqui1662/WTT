import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TradingPlatforms } from "src/types";

export const useSubscribe = () => {
  const { planId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
    machinId: "",
    provider: "",
    platform: {
      [TradingPlatforms.TradingView]: false,
      [TradingPlatforms.ThinkOrSwim]: false,
      [TradingPlatforms.NinjaTraders]: false,
      [TradingPlatforms.Sierrachart]: false,
    },
    planId: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
    machinId: "",
    provider: "",
    platform: "",
    planId: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setData((prevData) => ({
      ...prevData,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      country: user.county || "",
      planId: planId || "",
    }));
  }, [planId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      Object.values(data.platform).every((value) => !value) ||
      !data.firstName ||
      !data.lastName ||
      !data.address ||
      !data.city ||
      !data.state ||
      !data.zipCode ||
      !data.country ||
      !data.phone ||
      !data.email
    ) {
      if (!data.firstName) {
        setError((prev) => ({
          ...prev,
          firstName: "First Name is required",
        }));
      }
      if (!data.lastName) {
        setError((prev) => ({
          ...prev,
          lastName: "Last Name is required",
        }));
      }
      if (!data.address) {
        setError((prev) => ({
          ...prev,
          address: "Address is required",
        }));
      }
      if (!data.city) {
        setError((prev) => ({
          ...prev,
          city: "City is required",
        }));
      }
      if (!data.state) {
        setError((prev) => ({
          ...prev,
          state: "State is required",
        }));
      }
      if (!data.zipCode) {
        setError((prev) => ({
          ...prev,
          zipCode: "Zip Code is required",
        }));
      }
      if (!data.country) {
        setError((prev) => ({
          ...prev,
          country: "Country is required",
        }));
      }
      if (!data.email) {
        setError((prev) => ({
          ...prev,
          email: "Email is required",
        }));
      }
      if (!data.phone) {
        setError((prev) => ({
          ...prev,
          phone: "Phone is required",
        }));
      }
      if (Object.values(data.platform).every((value) => !value)) {
        setError((prev) => ({
          ...prev,
          platform: "Trading Platform is required",
        }));
      }
    } else {
      setOpenModal(true);
    }
  };

  return {
    data,
    setData,
    error,
    setError,
    handleSubmit,
    openModal,
    setOpenModal,
  };
};
