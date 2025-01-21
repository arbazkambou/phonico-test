"use client";

import { useAuth } from "@/Contexts/AuthContext";
import { getAllLines } from "@/lib/LineApis";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import LoadingSpinner from "../layout/LoadingSpinner";
import MyEsims from "./MyEsims";

function MyEsim() {
  const router = useRouter();
  const { isAuthenticated, isAuthLoading } = useAuth();
  const { data: lines = [], isLoading: isLinesLoading } = useQuery({
    queryKey: ["lines"],
    queryFn: getAllLines,
    enabled: isAuthenticated,
  });

  if (isAuthLoading || isLinesLoading) return <LoadingSpinner />;

  if (!isAuthenticated) router.push("/login");

  if (lines.length === 1) router.push(`/my-esim/${lines[0].id}`);

  return (
    <section>
      <Container>
        <MyEsims />
      </Container>
    </section>
  );
}

export default MyEsim;
