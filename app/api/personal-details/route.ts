import { NextResponse } from "next/server"

import mockData from "../hello/mock-data.json"

export async function GET(request: Request) {
  const personalDetails = mockData.personalDetails
  return NextResponse.json(personalDetails, { status: 200 })
}
