import { LanguageSelect } from './Header.jsx';
import { useT } from '../i18n.jsx';

const body = 'text-[13px] leading-7 text-slate-800 font-serif';

export default function AboutSection() {
  const t = useT();
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <div className="mx-auto max-w-[380px] rounded-full bg-field py-3 text-center">
        <h2 id="about-heading" className="font-display text-base font-bold">
          {t('About BMI')}
        </h2>
      </div>
      <div className="mt-3 flex justify-end">
        <LanguageSelect variant="about" />
      </div>

      <div className="mx-auto mt-4 max-w-[1000px] space-y-12 px-1 sm:px-4">
        <article id="bmi-intro">
          <h3 className="mb-3 text-lg  font-semibold">BMI Introduction</h3>
          <p className={body}>
            Body Mass Index (BMI) is a number calculated from a person&apos;s weight and height. It is
            found by dividing weight in kilograms by the square of height in metres, or, in imperial
            units, by multiplying weight in pounds by 703 and dividing by height in inches squared. The
            result places an adult into a broad category: underweight (below 18.5), normal weight (18.5
            to 24.9), overweight (25 to 29.9) or obesity (30 and above). Because it only uses two
            measurements, BMI is quick and inexpensive to work out, but it has clear limits. It cannot
            tell muscle from fat, does not show where fat is stored, and does not account for age, sex,
            ethnicity or pregnancy. Athletes with a lot of muscle may score high, while older adults who
            have lost muscle may score in the normal range despite a high level of body fat. BMI is best
            seen as a starting point for a conversation, not a diagnosis.
          </p>
        </article>

        <article id="why-bmi">
          <h3 className="mb-3 text-lg font-semibold">Why Need BMI</h3>
          <p className={body}>
            Doctors, researchers and public health teams use BMI because it is simple, consistent and
            easy to compare across large groups of people. At a population level, higher BMI values are
            linked with a greater likelihood of conditions such as type 2 diabetes, high blood pressure
            and heart disease, while very low values can point to undernutrition. For an individual,
            BMI works as a quick screening step that can prompt further checks, such as waist
            measurement, blood pressure, blood tests and a review of diet, activity and family history.
            It should never be treated as a complete picture of health. Two people with the same BMI can
            have very different health profiles, so the number is most useful alongside other
            information and professional advice.
          </p>
        </article>

        <article id="bmi-maintenance">
          <h3 className="mb-3 text-lg font-semibold">How Can You Maintain Your BMI?</h3>
          <p className={body}>
            Healthy weight is usually supported by habits that are realistic enough to keep for years.
            Build meals around vegetables, fruit, whole grains, beans, lean proteins and healthy fats,
            and go easy on sugary drinks and heavily processed snacks. Aim for at least 150 minutes of
            moderate activity each week, such as brisk walking or cycling, and add muscle-strengthening
            exercise on two or more days. Most adults need seven to nine hours of sleep, since poor
            sleep can affect appetite and energy. Managing stress, drinking enough water and eating
            mindfully also help. Gradual changes tend to last longer than strict diets, and anyone
            planning a major change in eating or exercise, or who has a health condition, should speak
            with a doctor or registered dietitian first.
          </p>
        </article>
      </div>
    </section>
  );
}
