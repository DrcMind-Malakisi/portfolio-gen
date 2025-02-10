import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  Star,
} from "lucide-react";
import DefaultTemplate from "./templates/template-01";
import { PortfolioData } from "@/lib/validations/add-portfolio";

export function PortfolioPreview() {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="space-y-4">
      <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="bg-gray-100 p-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="rounded-full w-3 h-3 bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded border px-2 py-1">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <RotateCcw className="w-4 h-4 text-gray-400" />
            <div className="flex-grow flex items-center bg-gray-100 rounded px-2 py-1">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-800">
                https://siteweb/p/{formData.username || "username"}
              </span>
            </div>
            <Star className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <DefaultTemplate data={formData as PortfolioData} />
      </div>
    </div>
  );
}
