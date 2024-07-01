import ScaleImg from "public/performance.jpg"
import Hero from "@/components/hero";

export default function ScalePage() {
    return (
        <div>
            <Hero imgData={ScaleImg} imgAlt='steel factory' title='Scale your app to infinity'/>
        </div>
    );
}