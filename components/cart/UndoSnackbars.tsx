"use client";

import { Snackbar, Button } from "@mui/material";
import { useCartStore } from "@/lib/store/cartStore";

export default function UndoSnackbars() {
  const { deletedItems, undoRemove } = useCartStore();

  return (
    <>
      {deletedItems.map(({ item, undoId, reason }, index) => (
        <Snackbar
          key={undoId}
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{
            bottom: `${16 + index * 70}px !important`, // stacking
          }}
          message={
            reason === "saved"
              ? `"${item.name}" gemt i favoritter`
              : `"${item.name}" slettet fra kurv`
          }
          action={
            <Button
              color="error"
              size="small"
              onClick={() => undoRemove(undoId)}
            >
              FORTRYD
            </Button>
          }
        />
      ))}
    </>
  );
}
