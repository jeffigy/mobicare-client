"use client";

import Input from "@/components/ui/Input";
import {
  deviceIssueData,
  deviceTypeData,
  statusData,
} from "@/lib/repairFormData";
import { useEditRepairMutation } from "@/features/repairs/repairMutations";
import { RepairType } from "@/types/Repair";
import { AxiosApiResponse } from "@/types/ServerResponse";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const EditRepairForm = ({ repair }: { repair: RepairType }) => {
  const {
    mutate: editRepair,
    isSuccess,
    isPending,
    isError,
    error,
  } = useEditRepairMutation();
  const router = useRouter();
  const [name, setName] = useState(repair.customer.name);
  const [email, setEmail] = useState(repair.customer.email);
  const [number, setNumber] = useState(repair.customer.number);
  const [type, setType] = useState(repair.device.type);
  const [brand, setBrand] = useState(repair.device.brand);
  const [model, setModel] = useState(repair.device.model);
  const [imei, setImei] = useState(repair.device.imeiOrSerialNumber);
  const [issueCategory, setIssueCategory] = useState(
    repair.problemDescription.issueCategory,
  );
  const [details, setDetails] = useState(repair.problemDescription.details);
  const [status, setStatus] = useState(repair.status);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const obj = {
      id: repair.id,
      customer: { name, email, number },
      device: { type, brand, model, imeiOrSerialNumber: imei },
      problemDescription: {
        issueCategory,
        details,
      },
      status,
    };
    editRepair(obj);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success", {
        description: "Repair updated",
      });
      router.back();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error((error as AxiosApiResponse).response?.data.message);
    }
  }, [isError, error]);

  return (
    <div className="card card-bordered mx-auto flex w-full max-w-screen-sm border-gray-700">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="card-title">Edit Repair Form</div>

        <div className="divider divider-secondary">Customer</div>
        <Input
          label="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          label="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          label="Number"
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />

        <div className="divider divider-secondary">Device</div>
        <select
          className="select select-bordered w-full"
          value={type}
          onChange={({ target }) => setType(target.value)}
        >
          <option disabled value={""}>
            Select device type
          </option>
          {Object.values(deviceTypeData).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <Input
          label="Brand"
          value={brand}
          onChange={({ target }) => setBrand(target.value)}
        />
        <Input
          label="Model"
          value={model}
          onChange={({ target }) => setModel(target.value)}
        />
        <Input
          label="IMEI / Serial Number"
          value={imei}
          onChange={({ target }) => setImei(target.value)}
        />

        <div className="divider divider-secondary">Problem Description</div>
        <select
          className="select select-bordered w-full"
          value={issueCategory}
          onChange={({ target }) => setIssueCategory(target.value)}
        >
          <option disabled value={""}>
            Select issue category
          </option>
          {Object.values(deviceIssueData).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <textarea
          className="textarea textarea-bordered"
          placeholder="provide details"
          value={details}
          onChange={({ target }) => setDetails(target.value)}
        ></textarea>

        <div className="divider divider-secondary">Other details</div>
        <select
          className="select select-bordered w-full"
          value={status}
          onChange={({ target }) => setStatus(target.value)}
        >
          <option disabled value={""}>
            Select Status
          </option>
          {Object.values(statusData).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="card-actions">
          <button type="submit" className="btn btn-primary w-full">
            {isPending ? (
              <>
                <span className="loading loading-spinner"></span> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRepairForm;
