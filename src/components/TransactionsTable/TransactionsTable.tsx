/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Card, Table } from "antd";
import { LoadingIndicator } from "components/LoadingIndicator";
import { useResolution } from "hooks";
import { useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "stores";
import {
  fetchTransactions,
  transactionStateSelector,
} from "stores/transaction";
import { AOS_FADE_UP } from "variables";
import "./TransactionsTable.scss";

export const TransactionsTable = () => {
  const dispatch = useAppDispatch();
  const resolution = useResolution();

  const {
    filter: { size: pageSize },
    transactions,
    loading,
    totalCount,
  } = useAppSelector(transactionStateSelector);

  const columns = useRef([
    {
      title: "Beneficiary",
      dataIndex: "beneficiary",
      key: "beneficiary",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ]).current;
  const tableDataSource = useMemo(
    () =>
      transactions.map((tr) => ({
        ...tr,
        key: tr.id,
        date:
          typeof tr.date === "string"
            ? (tr.date as string)
                .replaceAll("T", " ")
                .replaceAll("Z", "")
                .replaceAll("\\.d+", "")
            : tr.date?.toISOString(),
      })),
    [transactions],
  );

  useEffect(() => {
    dispatch(fetchTransactions({ size: pageSize, page: 1 }));
  }, []);

  return (
    <Card className="TransactionsTable" {...AOS_FADE_UP}>
      <LoadingIndicator loading={loading} />
      <Table
        className="TransactionsTable__table"
        dataSource={tableDataSource}
        columns={columns}
        scroll={{
          y: "38vh",
        }}
        pagination={{
          total: totalCount,
          pageSize,
          onChange(page, pageSize) {
            dispatch(fetchTransactions({ size: pageSize, page }));
          },
        }}
      />
    </Card>
  );
};
