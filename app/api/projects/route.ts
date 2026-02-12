import { NextResponse } from "next/server";
import { projects } from "@/lib/portfolio-data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const techFilter = searchParams.get("tech");
    const limit = searchParams.get("limit");

    let filteredProjects = projects;

    // 기술 스택으로 필터링
    if (techFilter) {
      filteredProjects = projects.filter((project) =>
        project.techStack.some(
          (tech) => tech.toLowerCase().includes(techFilter.toLowerCase())
        )
      );
    }

    // 개수 제한
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredProjects = filteredProjects.slice(0, limitNum);
      }
    }

    const response = {
      success: true,
      data: {
        projects: filteredProjects,
        total: filteredProjects.length,
        filters: {
          tech: techFilter || null,
          limit: limit ? parseInt(limit, 10) : null,
        },
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
