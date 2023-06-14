import { PaypalSubscribeButton } from "src/components/PaypalSubscribeButton/PaypalSubscribeButton";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import styles from "./SubscribeModal.module.scss";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { LabeledSelectButton } from "src/components/LabeledSelectButton/LabeledSelectButton";
import { useEffect, useState } from "react";
import { useFirebase } from "src/hooks/useFirebase";

export const SubscribeModal = ({ handleClose, data }: { handleClose: () => void; data: any }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [planId, setPlanId] = useState();
  const { createSubscriber } = useFirebase();

  useEffect(() => {
    setPlanId(data.planId);
  }, [data]);

  const handleApprove = async (_data: any) => {
    await createSubscriber({
      ..._data,
      ...data,
    });
    handleClose();
  };

  return (
    <ModalWrapper handleClose={handleClose} className={styles.container}>
      <SectionHeading className={styles.heading} heading="Terms of Service and Licensing" />
      <p className={styles.description}>
        The Products transacted through the Service are licensed, not sold, to You for use only under the terms of this
        license agreement (“Agreement”), unless a Product is accompanied by a separate license agreement, in which case
        the terms of that separate license agreement will govern, subject to Your prior acceptance of that separate
        license agreement. The service supplier (“Application Provider”) reserves all rights not expressly granted to
        You. The Products and Services that are subject to this license is referred to in this license as the “Licensed
        Application.”
      </p>
      <ol className={styles.list}>
        <li className={styles.listItem}>
          Scope of License: This license granted to You for the Licensed Application by Application Provider is limited
          to a non-transferable license to use the Licensed Application on any computing device that You own or control
          and as permitted by the Usage Rules set forth in the Terms and Conditions (the “Usage Rules”). This license
          does not allow You to use the Licensed Application on any computing device that You do not own or control, and
          You may not distribute or make the Licensed Application available over a network where it could be used by
          multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the
          Licensed Application. You may not copy (except as expressly permitted by this license and the Usage Rules) run
          or execute, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify, or create
          derivative works of the Licensed Application, any updates, or any part thereof (except as and only to the
          extent any foregoing restriction is prohibited by applicable law or to the extent as may be permitted by the
          licensing terms governing use of any open sourced components included with the Licensed Application). Any
          attempt to do so is a violation of the rights of the Application Provider and its licensors. If You breach
          this restriction, You may be subject to prosecution and damages. The terms of the license will govern any
          upgrades provided by Application Provider that replace and/or supplement the original Product, unless such
          upgrade is accompanied by a separate license in which case the terms of that license will govern.
        </li>
        <li className={styles.listItem}>
          Consent to Use of Data: You agree that Application Provider may collect and use technical data and related
          information, including but not limited to technical information about Your computing device, system and
          application software, and peripherals, that is gathered periodically to facilitate the provision of software
          updates, product support and other services to You (if any) related to the Licensed Application. The
          Application Provider may use this information to improve its products or to provide services or technologies
          to You.
        </li>
        <li className={styles.listItem}>
          Termination. The license is effective until terminated by You or Application Provider. Your rights under this
          license will terminate automatically without notice from the Application Provider if You fail to comply with
          any term(s) of this license. Upon termination of the license, You shall cease all use of the Licensed
          Application, and destroy all copies, full or partial, of the Licensed Application.
        </li>
        <li className={styles.listItem}>
          Services; Third Party Materials. The Licensed Application may enable access to Application Provider’s and
          third party services and web sites (collectively and individually, “Services”). Use of the Services may
          require Internet access and that You accept additional terms of service. You understand that by using any of
          the Services, You may encounter content that may be deemed offensive, indecent, objectionable, or inaccurate,
          which content may or may not be identified as having explicit language, and that the results of any use of
          Service, Products or Licensed Application may automatically and unintentionally reference or load
          objectionable material or inaccurate data. Nevertheless, You agree to use the Services and Products at Your
          sole risk and that the Application Provider shall not have any liability to You for content or data that may
          be found to be offensive, indecent, objectionable or inaccurate. Certain Services may display, include or make
          available content, data, information, applications or materials from third parties (“Third Party Materials”)
          or provide links to certain third party web sites. By using the Services, You acknowledge and agree that the
          Application Provider is not responsible for examining or evaluating the content, accuracy, completeness,
          timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third Party
          Materials or web sites. The Application Provider does not warrant or endorse and does not assume and will not
          have any liability or responsibility to You or any other person for any third-party Services, Third Party
          Materials or web sites, or for any other materials, products, or services of third parties. Third Party
          Materials and links to other web sites are provided solely as a convenience to You. Financial information
          displayed by any Services is for general informational purposes only and is not intended to be relied upon as
          investment advice. Before executing any securities transaction based upon information obtained through the
          Services, You should consult with a financial professional. Location data provided by any Services is for
          basic reference and informational purposes only and is not intended to be relied upon in situations where
          precise location information is needed or where erroneous, inaccurate or incomplete location data may lead to
          death, personal injury, property or environmental damage. Neither the Application Provider, nor any of its
          content providers, guarantees the availability, accuracy, completeness, reliability, or timeliness of stock or
          other financial information or location data displayed by any Products or Services. You agree that any
          Services contain proprietary content, information and material that is protected by applicable intellectual
          property and other laws, including but not limited to copyright, and that You will not use such proprietary
          content, information or materials in any way whatsoever except for permitted use of the Services. No portion
          of the Services may be reproduced in any form or by any means. You agree not to modify, rent, lease, loan,
          sell, distribute, or create derivative works based on the Services, in any manner, and You shall not exploit
          the Services in any unauthorized way whatsoever, including but not limited to, by trespass or burdening
          network capacity. You further agree not to use the Services in any manner to harass, abuse, stalk, threaten,
          defame or otherwise infringe or violate the rights of any other party, and that the Application Provider is
          not in any way responsible for any such use by You, nor for any harassing, threatening, defamatory, offensive
          or illegal messages or transmissions that You may receive as a result of using any of the Services. In
          addition, third party Services and Third Party Materials that may be accessed from, displayed on or linked to
          from the Products and Services are not available in all languages or in all countries. The Application
          Provider makes no representation that such Services and Materials are appropriate or available for use in any
          particular location. To the extent You choose to access such Services or Materials, You do so at Your own
          initiative and are responsible for compliance with any applicable laws, including but not limited to
          applicable local laws. The Application Provider, and its licensors, reserve the right to change, suspend,
          remove, or disable access to any Services at any time without notice. In no event will the Application
          Provider be liable for the removal of or disabling of access to any such Services. The Application Provider
          may also impose limits on the use of or access to certain Services, in any case and without notice or
          liability.
        </li>
        <li className={styles.listItem}>
          NO WARRANTY: YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED APPLICATION IS AT YOUR SOLE RISK AND
          THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU. TO THE MAXIMUM
          EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION AND ANY SERVICES PERFORMED OR PROVIDED BY THE
          LICENSED APPLICATION (“SERVICES”) ARE PROVIDED “AS IS” AND “AS AVAILABLE”, WITH ALL FAULTS AND WITHOUT
          WARRANTY OF ANY KIND, AND APPLICATION PROVIDER HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO
          THE LICENSED APPLICATION AND ANY SERVICES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED
          TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A
          PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS. APPLICATION
          PROVIDER DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF THE LICENSED APPLICATION, THAT THE
          FUNCTIONS CONTAINED IN, OR SERVICES PERFORMED OR PROVIDED BY, THE LICENSED APPLICATION WILL MEET YOUR
          REQUIREMENTS, THAT THE OPERATION OF THE LICENSED APPLICATION OR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE,
          OR THAT DEFECTS IN THE LICENSED APPLICATION OR SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN INFORMATION OR
          ADVICE GIVEN BY APPLICATION PROVIDER OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE
          LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING,
          REPAIR OR CORRECTION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS ON
          APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO YOU.
        </li>
        <li className={styles.listItem}>
          Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL APPLICATION PROVIDER BE LIABLE
          FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING,
          WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL
          DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE LICENSED APPLICATION, HOWEVER
          CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF APPLICATION PROVIDER
          HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF
          LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO
          YOU. In no event shall Application Provider’s total liability to you for all damages (other than as may be
          required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00).
          The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
        </li>
        <li className={styles.listItem}>
          You may not use or otherwise export or re-export the Licensed Application except as authorized by United
          States law, Canada law and the laws of the jurisdiction in which the Licensed Application was obtained. In
          particular, but without limitation, the Licensed Application may not be exported or re-exported (a) into any
          U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated
          Nationals or the U.S. Department of Commerce Denied Person’s List or Entity List. By using the Licensed
          Application, you represent and warrant that you are not located in any such country or on any such list. You
          also agree that you will not use these products for any purposes prohibited by United States law, Canada law,
          including, without limitation, the development, design, manufacture or production of nuclear, missiles, or
          chemical or biological weapons.
        </li>
        <li className={styles.listItem}>
          The Licensed Application and related documentation are “Commercial Items”, as that term is defined at 48
          C.F.R. §2.101, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation”,
          as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R.
          §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and
          Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as
          Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms
          and conditions herein. Unpublished-rights reserved under the copyright laws of the United States and Canada.
        </li>
        <li className={styles.listItem}>
          The laws of the Province of Quebec, excluding its conflicts of law rules, govern this license and your use of
          the Licensed Application. Your use of the Licensed Application may also be subject to other local, state,
          national, or international laws.
        </li>
        <li className={styles.listItem}>
          Credentials assigned to You by the Application Provider for use on the Application Provider’s site or
          affiliated web sites are non-transferable and may not be shared with a another person or party. The
          Application Provider reserves to right to revoke the credentials assigned to You and/or Your rights to use the
          Licensed Application at any time, at the Application Provider’s sole discretion, for failure to comply with of
          any of the terms of the Agreement.
        </li>
        <li className={styles.listItem}>
          The Agreement grants You, if your membership includes use of the Licensed Application with the NinjaTrader 7
          platform and are a “Trial” or “Pro” member (“Membership”) holder, permits non-current of use the Licensed
          Application on more than one (1) Machine IDs per Membership if You own or lease a NinjaTrader live trading
          license. If You are using a NinjaTrader Free (“SIM”) License, are a “Standard” membership holder or are in
          trial period You may activate this one (1) machine only.
        </li>
        <li className={styles.listItem}>
          The Agreement grants You, if you your membership includes use of the Licensed Application with the NinjaTrader
          8 platform, the right to use the Licensed Application on up to the number of machines for which you have
          purchased or leased licenses from the Application Provider. The Application Provider agrees to make updates
          and fixes to the Licensed Application on an as-needed basis. The Application Provider may require payment of a
          fee from You for access to these fixes and updates.
        </li>
        <li className={styles.listItem}>
          Transfers of the Licensed Application between activated machines or devices will incur a service charge.
        </li>
        <li className={styles.listItem}>
          If You transfer the Licensed Application or access any member-exclusive content from the Application Provider
          web site, You must activate your membership within twenty-four (24) hours of commencement of membership.
        </li>
        <li className={styles.listItem}>
          As membership is a time-based recurring membership (“Periodic”), the Application Provider’s payment processor
          (“PayPal”) will automatically renew your membership until You cancel it. Should You decide to cancel your
          membership, You must sign into your account with the Payment Processor and cancel your automatic payment plan
          prior to your renewal date. Cancelling your automatic billing plan will terminate your account with the
          Application Provider, though your software license will remain active for the remainder of your membership
          period. If in a trial period, should You cancel your automatic billing plan this action will terminate your
          account, software license and this agreement. Refunds for partial membership periods will not be provided.
        </li>
        <li className={styles.listItem}>
          All transactions are final and no refunds will be provided. It is the Your sole responsibility to ensure a
          Service and any accompanying Licensed Application is fit for any specific purpose or function prior to a
          transaction. Transactions which result in charge-backs or other claims for refund will result in revocation of
          the Licensed Application and all membership benefits, and no future sales of products or services will be made
          to claimants.
        </li>
        <li className={styles.listItem}>
          The Application Provider reserves the right to refuse or terminate access to the Products, Licensed
          Applications or Service to any individual or organization for any reason.
        </li>
        <li className={styles.listItem}>
          The act of using the Service, downloading or otherwise transferring the Products or Licensed Applications to a
          computing device constitutes acceptance of the Agreement.
        </li>
        <li className={styles.listItem}>
          The Terms and Conditions of this Agreement are subject to change without prior notice.
        </li>
      </ol>
      <LabeledSelectButton
        className={styles.acceptButton}
        label="Click here to indicate that you have read and agree to the terms presented in the Terms and Congitions agreement"
        name="accept"
        value={`${acceptTerms}`}
        onChange={() => setAcceptTerms((prev) => !prev)}
      />
      {planId && <PaypalSubscribeButton planId={planId} disabled={!acceptTerms} handleApprove={handleApprove} />}
    </ModalWrapper>
  );
};
