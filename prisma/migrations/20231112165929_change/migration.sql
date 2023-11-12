/*
  Warnings:

  - You are about to drop the column `repeat` on the `Expense` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "repeat",
ADD COLUMN     "repeatExpense" BOOLEAN NOT NULL DEFAULT false;
