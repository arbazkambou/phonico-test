"use client";

import React, { useState } from "react";
import styles from "./CheckCompatibility.module.css";
import { SupportedDeviceType } from "@/types/SupportedDevicesType";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkImei } from "@/lib/CheckComaptibilityApi";
import { useForm } from "react-hook-form";

function CheckCompatibility({
  supportedDevices,
  setShowModel,
}: {
  supportedDevices: SupportedDeviceType[];
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const { register, handleSubmit } = useForm<{ imei: string }>();

  const filteredBrands = Array.from(
    new Set(supportedDevices.map((device) => device.type))
  );
  const filteredDevices = supportedDevices.filter((device) => {
    return (
      device.type
        .toLowerCase()
        .trim()
        .includes(selectedBrand.toLowerCase().trim()) &&
      device.model
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim())
    );
  });

  const { mutate, isPending } = useMutation({
    mutationFn: checkImei,
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success(
        <div>
          <strong>Congratulations 🎉</strong>
          <br />
          Your device is eSIM compatible
        </div>
      );

      setShowModel(false);
    },
  });

  function onImeiSubmit(formData: { imei: string }) {
    mutate(formData.imei);
  }

  return (
    <div>
      <Row>
        <Col xl={5} className="d-flex flex-column gap-4 mb-5 mb-xl-0">
          <div className="d-flex flex-column align-items-center gap-1">
            <Image
              src={"/images/findDevice.svg"}
              width={57}
              height={57}
              alt="check device compatibility"
            />
            <p className="font20 fontWeight600 text-center">Find your Device</p>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              {/* Device Name Search Input */}
              <input
                type="text"
                placeholder="Search device name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="myInput myInputWhite font14 w-100"
              />

              {/* Brand Selection Dropdown */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="myInput myInputWhite font14 w-100"
              >
                <option value="">Select Brand</option>
                {filteredBrands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Scrollable Supported Devices List */}
            <div className={`${styles.deviceList} mt-2`}>
              {filteredDevices.length > 0 ? (
                filteredDevices.map((device, index) => (
                  <div
                    key={index}
                    className={styles.deviceItem}
                    onClick={() => {
                      toast.success(
                        // "Congratulation 🎉! <br>Your device is eSIM compatible"
                        <div>
                          <strong>Congratulations 🎉</strong>
                          <br />
                          Your device is eSIM compatible
                        </div>
                      );
                      setShowModel(false);
                    }}
                  >
                    {device.model}
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>No devices found</div>
              )}
            </div>
          </div>
        </Col>
        <Col
          xl={2}
          className="d-flex align-items-center justify-content-center  mb-5 mb-xl-0"
        >
          <p className="textAccent font40 fontWeight600 w-100 text-center">
            OR
          </p>
        </Col>
        <Col xl={5} className="d-flex flex-column gap-4">
          <div
            className="d-flex flex-column align-items-center gap-1"
            style={{ minHeight: "450px" }}
          >
            <Image
              src={"/images/imei.svg"}
              width={57}
              height={57}
              alt="check device compatibility"
            />
            <p className="font20 fontWeight600 text-center">
              Enter your IMEI Number
            </p>
            <p className="font12 fontWeight500">
              Dial *#06# to get your phone’s IMEI number or find it in device
              settings.
            </p>

            <div className="w-100">
              <form
                className="d-flex justify-content-center align-items-center position-relative mt-2"
                style={{ maxWidth: "350px", margin: "auto" }}
                onSubmit={handleSubmit(onImeiSubmit)}
              >
                <input
                  className="myInput myInputWhite w-100"
                  placeholder="Enter your IMEI number"
                  type="number"
                  {...register("imei", {
                    required: "IMEI number is required",
                  })}
                />
                <button
                  className="myButton myButtonColored textWhite h-100"
                  style={{ position: "absolute", right: "0px" }}
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Checking..." : "Check"}
                </button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CheckCompatibility;
