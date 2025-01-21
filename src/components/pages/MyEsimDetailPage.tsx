"use client";

import { useAuth } from "@/Contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "react-bootstrap";
import DashboardTabs from "../dashboard/DashboardTabs";
import RemainingDataAndBalance from "../dashboard/RemainingDataAndBalance";
import LoadingSpinner from "../layout/LoadingSpinner";
import { useEffect } from "react";
import toast from "react-hot-toast";

function MyEsimDetailPage() {
  const { isAuthenticated, isAuthLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");

    if (status === "true") {
      toast.success("Process completed successfully");
    } else if (status === "false") {
      toast.error("Process failed");
    }

    if (status) {
      const params = new URLSearchParams(searchParams);
      params.delete("status");
      const newPath = `${window.location.pathname}?${params.toString()}`;

      router.replace(newPath || window.location.pathname);
    }
  }, [searchParams, router]);

  if (isAuthLoading) return <LoadingSpinner />;

  if (!isAuthenticated) router.push("/login");
  return (
    <section>
      <Container>
        <RemainingDataAndBalance />
        <DashboardTabs />
      </Container>
    </section>
  );
}

export default MyEsimDetailPage;
