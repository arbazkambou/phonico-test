"use client";

import { getLinesHistory } from "@/lib/LineHistoryApis";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../layout/LoadingSpinner";
import styles from "./OrderHistory.module.css";
import OrderHistoryCard from "./OrderHistoryCard";
import { RefreshCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "@/Contexts/CartContext";

function OrderHistory() {
  const searchParams = useSearchParams();
  const [hasShownToast, setHasShownToast] = useState(false);
  const router = useRouter();
  const { clearCart } = useCart();
  const queryClient = useQueryClient();
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["orderHistory"],
    queryFn: getLinesHistory,
  });

  function handleRefresh() {
    refetch();
    queryClient.invalidateQueries({ queryKey: ["lines"] });
  }

  useEffect(() => {
    const status = searchParams.get("status");
    if (!hasShownToast && status) {
      if (status === "true") {
        toast.success("Plan successfully purchased");
        clearCart();
      } else if (status === "false") {
        toast.error("Plan purchase failed");
      }
      setHasShownToast(true);
    }

    if (status) {
      const params = new URLSearchParams(searchParams);
      params.delete("status");
      const newPath = `${window.location.pathname}?${params.toString()}`;
      router.replace(newPath || window.location.pathname);
    }
  }, []);

  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      <div>
        <div className={`${styles.orderHistory} pt-4 px-2 pt-sm-4 px-sm-4`}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <p className="font30 fontWeight500 textAccent ">Order History</p>
            <button
              className="myButton myButtonColored rounded-pill d-flex align-items-center gap-2"
              onClick={handleRefresh}
              disabled={isFetching}
            >
              {isFetching ? (
                "Refreshing..."
              ) : (
                <>
                  <span>
                    <RefreshCcw />
                  </span>
                  <span>Refresh</span>
                </>
              )}
            </button>
          </div>

          {data && data.length > 0 ? (
            <Row>
              {data.map((orderHistory, index) => (
                <Col key={index} xl={6} className="mb-5">
                  <OrderHistoryCard orderHistory={orderHistory} />
                </Col>
              ))}
            </Row>
          ) : (
            <div
              style={{ height: "60vh" }}
              className="d-flex align-items-center justify-content-center"
            >
              <p className="font20">No data found</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default OrderHistory;
