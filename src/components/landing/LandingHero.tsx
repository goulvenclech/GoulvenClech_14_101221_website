import InternLink from "../Link"
/**
 * Landing page's hero. Display the compagny's name and a link to the
 * employees page.
 */
export default function LandingHero() {
  return(
    <section>
      <h1 className="text-4xl text-center font-bold leading-loose">
        HRnet
      </h1>
      <InternLink name="View Current Employees" to="/employees" />
    </section>
  )
}