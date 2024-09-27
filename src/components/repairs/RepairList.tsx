"use client";
import { useRepairs } from "@/services/queries";
import React from "react";
import Repair from "./Repair";
import { RepairType } from "@/types/Repair";
import { AxiosApiResponse } from "@/types/ServerResponse";

const RepairList = () => {
  const { data, isLoading, isError, error } = useRepairs();
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>{(error as AxiosApiResponse).response?.data.message}</p>;
  }
  return (
    <>
      {data
        ? data.map((repair: RepairType) => (
            <Repair repair={repair} key={repair.id} />
          ))
        : "no data found"}
    </>
  );
};

export default RepairList;
