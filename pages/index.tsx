import Link from "next/link";

export default function Index () {
    return (
        <div style={{display: 'grid', gap: '4px'}}>
            <Link href="/lesson-one">Lesson One</Link>
            <Link href="/lesson-two">Lesson Two</Link>
        </div>
    )
}