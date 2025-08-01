-- CreateTable
CREATE TABLE "public"."Account" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccountValue" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "period" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AccountValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountValue_account_id_period_key" ON "public"."AccountValue"("account_id", "period");

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "public"."Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccountValue" ADD CONSTRAINT "AccountValue_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
