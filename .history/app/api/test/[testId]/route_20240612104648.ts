import { NextRequest, NextResponse } from "next/server"

export const GET = (
    request: NextRequest, 
    { params }: 

) => {
    return NextResponse.json({hello: "world"});
}