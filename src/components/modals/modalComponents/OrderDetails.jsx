import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,

  bgcolor: "white",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
  outline: "none",
};

function OrderDetails({ data, openModal, setOpenModal }) {
  console.log("data", data);
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };
  return (
    <Modal
      open={openModal}
      onClose={handleInputClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="">
          <div className="py-3 flex justify-between items-center border-b border-1 border-Secondary">
            <h4 className="text-md capitalize font-semibold text-Primary">
              Order Details, Token: #{data?.token?.id}
            </h4>
            <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
          </div>

          <div className="pt-6">
            <button className="bg-Pink text-Light w-full text-center font-semibold py-2">
              Filter Order Token: #{data?.token?.id}
            </button>
            <div className="overflow-x-auto  bg-Light  h-auto rounded">
              <table className="table OrderDetailsTable table-xs table-pin-rows">
                <thead className="z-10 bg-Primary">
                  <tr>
                    <th className="">S.No</th>
                    <th className="">Food</th>
                    <th className="">Additional Info</th>
                    <th className="">Qty</th>
                    <th className="">Status</th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden z-0">
                  {data?.orderedItems?.map((e, index) => (
                    <tr key={e?.id}>
                      <td>{index + 1}</td>
                      <td>{e?.food_item}</td>
                      <td>Variation: {e?.variation}</td>
                      <td>{e?.quantity}</td>
                      <td>{e?.is_ready === "1" ? <DoneIcon className="text-DarkGreen" /> : <CloseIcon className="text-Pink" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pb-2">
            <h4 className="bg-[#0ac2de] text-Light py-2 text-center font-semibold w-full">
              Order Details
            </h4>
            <ul className="orderDetils">
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Received By</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.user_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Customer</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.customer_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Branch</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.branch_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Department</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.dept_tag_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Table</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.table_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Waiter</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.waiter_name}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Subtotal</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.order_bill}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">VAT updated</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.vat}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Service charge</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.service_charge}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Discount</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.discount}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Department Commission</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.dept_commission}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Total bill</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.total_payable}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Paid amount</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.paid_amount}</h4>
              </li>
              <li className="flex items-center justify-around py-2">
                <h4 className="font-semibold text-sm w-[40%] m-auto text-center">Due amount</h4>
                <h4 className="text-sm w-[40%] m-auto text-center">{data?.paid_amount - data?.total_payable}</h4>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default OrderDetails;
